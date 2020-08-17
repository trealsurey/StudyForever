```java
// 遍历jar包内的所有文件
@Test
public void getAllFilesName(){
		
	String path = "d:/hb.jar";	// 文件路径
	try {
		File file = new File(path);
		JarFile jarFile = new JarFile(file);
		Enumeration<JarEntry> jarEntries = jarFile.entries();
		while(jarEntries.hasMoreElements()){
			JarEntry entry = jarEntries.nextElement();
			System.out.println(entry.getName());
		}
	} catch (IOException e) {
		e.printStackTrace();
	}
}

// 读取jar包中的某个文件
@Test
public void readFileInJar(){
	String path = "d:/hb.jar";
	try {
		File file = new File(path);
		JarFile jarFile = new JarFile(file);
		//指定文件路径的位置
//	    ZipEntry zipEntry = jarFile.getEntry("AppProperty.xml");
		ZipEntry zipEntry = jarFile.getEntry("META-INF/MANIFEST.MF");
		InputStream  is = jarFile.getInputStream(zipEntry);
		BufferedReader br = new BufferedReader(new InputStreamReader(is));
		String temp = null;
		while((temp = br.readLine())!=null){
			System.out.println(temp);
		}
			
	} catch (IOException e) {
		e.printStackTrace();
}
```



```java
// 自定义类加载器
public class xxxClassLoader extends java.lang.ClassLoader{
    
}
```

项目中需要加载应用配置,加载不到,需要用ClassPathResource

问题同上,父加载器要加载应用配置,因此需要调用上下文加载器`Thread.currentThread().getContextClassLoader()`

```java
//正确的做法是,获取到jar包里面的文件,需要注意类加载是否能加载到的问题,
//1. Spring工具
keystorePath = "classpath:"+keystoreFilePath;
ClassPathResource classPathResource = new ClassPathResource(keystorePath);
InputStream keystoreinputStream = classPathResource.getInputStream();


//使用类加载器加载classpath里面的
//指定Thread.currentThread().getContextClassLoader();加载器
SmileClassPathResource smileClassPathResource = new SmileClassPathResource(keystoreFilePath);
InputStream  keystoreinputStream=smileClassPathResource.getInputStream();

```

![classloader](https://segmentfault.com/img/bV4ERs?w=651&h=521)



### 使用 Spring ResourcePatternResolver 读取指定路径下的类信息

```java

import org.junit.Test;
import org.springframework.core.annotation.AnnotationUtils;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;
import org.springframework.core.type.classreading.CachingMetadataReaderFactory;
import org.springframework.core.type.classreading.MetadataReader;
import org.springframework.core.type.classreading.MetadataReaderFactory;
import org.springframework.stereotype.Controller;
import org.springframework.util.ClassUtils;
import org.springframework.util.SystemPropertyUtils;

import java.io.IOException;
import java.lang.annotation.Annotation;
import java.util.Arrays;

import static org.springframework.core.io.support.ResourcePatternResolver.CLASSPATH_ALL_URL_PREFIX;

/**
 * @desc: Desc
 * @author: wangyingjie1
 * @date: 2018/1/29 18:16
 * To change this template use File | Settings | File and Code Templates | Includes | File Header.
 */
public class ResourcePatternResolverTest {

    private static final String basePackage = "com.jd.controller";
    
    public static final String DEFAULT_RESOURCE_PATTERN = "/**/*";

    @Test
    public void testReadResource() throws IOException {
        //获取Spring资源解析器
        ResourcePatternResolver resourcePatternResolver = new PathMatchingResourcePatternResolver();

        //获取packageSearchPath下的Resource，这里得到的Resource是Class信息
        Resource[] resources = resourcePatternResolver.getResources(CLASSPATH_ALL_URL_PREFIX
                + ClassUtils.convertClassNameToResourcePath(SystemPropertyUtils.resolvePlaceholders(basePackage))
                + DEFAULT_RESOURCE_PATTERN + ClassUtils.CLASS_FILE_SUFFIX);

        Arrays.stream(resources).forEach(resource -> {
            System.out.println("=======>" + resource.getFilename());
        });


        parseClazz(resources, resourcePatternResolver);
    }

    private void parseClazz(Resource[] resources, ResourcePatternResolver resourcePatternResolver)  throws IOException {

        //创建Spring中用来读取class的工厂
        MetadataReaderFactory metadataReaderFactory = new CachingMetadataReaderFactory(resourcePatternResolver);

        for (Resource resource : resources) {
            //检查resource，
            String fullClassName = null;
            if (resource.isReadable()) {
                MetadataReader metadataReader = metadataReaderFactory.getMetadataReader(resource);
                if (metadataReader != null) {
                    fullClassName = metadataReader.getClassMetadata().getClassName();
                }
            }

            try {
                Class<?> clazz = Class.forName(fullClassName);
                //方式1
                Annotation myAnnotation = clazz.getAnnotation(Controller.class);

                //方式2
                Controller annotation = AnnotationUtils.findAnnotation(clazz, Controller.class);

                System.out.println("an===========>" + annotation );
            } catch (ClassNotFoundException e) {
                e.printStackTrace();
                throw new RuntimeException(" check package path", e);
            }
        }
    }
}
```



### 方法引用

> http://liwenkun.me/2017/03/23/java-8-method-references/

 Java8之后的双冒号 `::` 是方法引用，使用时 `类名::方法名`，比如 `System.out::println` ，基本用在 lambda 表达式

`() -> new HashMap<>()` 就可以写成 `HashMap::new` 





`git add .`

`git commit`

`git pull`

`git push`

`git branch`



