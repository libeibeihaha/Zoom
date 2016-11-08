//包装函数
module.exports = function(grunt) {  
      //任务配置，所有插件的配置信息
  grunt.initConfig({  
//获取 package.json的信息
    pkg: grunt.file.readJSON('package.json'),
    //concat插件的配置信息
        concat: {
            options:{
                stripBanners:true, //合并时允许输出头部信息
                banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */'
            },
            jsConcat:{
                src:'src/assets/js/*.js',
                dest:'src/assets/js/<%=pkg.name %> - <%= pkg.version %>.js'
            }
        },
       //压缩css
        cssmin:{
            options:{
                stripBanners:true, //合并时允许输出头部信息
                banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build:{
                src:'src/assets/css/main.css',
                dest:'build/css/<%= pkg.name %> - <%= pkg.version %>.min.css' //dest 是目的地输出
            }
        },
      //uglify插件的配置信息
        uglify: {  
        options: {  
              banner: '/*!  <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n',  
              //footer: '/*!  <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n',  
              //report: "min",  //输出压缩率，可选的值有 false(不输出信息)，gzip  
              //beautify: true  //美化代码  
         },  
       build: {
         
                src:'src/assets/js/<%=pkg.name %> - <%= pkg.version %>.js',//所有js文件
                dest: 'build/js/<%= pkg.name %> - <%= pkg.version %>.min.js'//输出到此目录下
          
        },  
    },
    connect:{
      options:{
        port:9000,
        hostname:"10.162.35.72",
        livereload:35729 //声明给watch监听的端口

      },
      server:
      {
        options:{
          open:true,//自动打开网页 http://
          base:['src']  //网页目录
        }
      }
    },
    watch:{
      livereload:{
        options:{
            livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
          },
          files:[ //下面文件的改变就会实时刷新网页
               'Zoom/*.html',
             'Zoom/images/{,*/}*.{png,jpg}',
             'Zoom/assets/css/{,*/}*.css',
             'Zoom/assets/js/{,*/}*.js'
          ]
      }
    }
  });  
  //告诉grunt我们讲使用的插件
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');

  // 默认被执行的任务列表。  
  grunt.registerTask('default', ['concat','cssmin','uglify']);
  grunt.registerTask('server',[
      'connect:server',
      'watch'
    ]);
  
};  