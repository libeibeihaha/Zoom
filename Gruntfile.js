//��װ����
module.exports = function(grunt) {  
      //�������ã����в����������Ϣ
  grunt.initConfig({  
//��ȡ package.json����Ϣ
    pkg: grunt.file.readJSON('package.json'),
    //concat�����������Ϣ
        concat: {
            options:{
                stripBanners:true, //�ϲ�ʱ�������ͷ����Ϣ
                banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */'
            },
            jsConcat:{
                src:'src/assets/js/*.js',
                dest:'src/assets/js/<%=pkg.name %> - <%= pkg.version %>.js'
            }
        },
       //ѹ��css
        cssmin:{
            options:{
                stripBanners:true, //�ϲ�ʱ�������ͷ����Ϣ
                banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build:{
                src:'src/assets/css/main.css',
                dest:'build/css/<%= pkg.name %> - <%= pkg.version %>.min.css' //dest ��Ŀ�ĵ����
            }
        },
      //uglify�����������Ϣ
        uglify: {  
        options: {  
              banner: '/*!  <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n',  
              //footer: '/*!  <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n',  
              //report: "min",  //���ѹ���ʣ���ѡ��ֵ�� false(�������Ϣ)��gzip  
              //beautify: true  //��������  
         },  
       build: {
         
                src:'src/assets/js/<%=pkg.name %> - <%= pkg.version %>.js',//����js�ļ�
                dest: 'build/js/<%= pkg.name %> - <%= pkg.version %>.min.js'//�������Ŀ¼��
          
        },  
    },
    connect:{
      options:{
        port:9000,
        hostname:"10.162.35.72",
        livereload:35729 //������watch�����Ķ˿�

      },
      server:
      {
        options:{
          open:true,//�Զ�����ҳ http://
          base:['src']  //��ҳĿ¼
        }
      }
    },
    watch:{
      livereload:{
        options:{
            livereload: '<%=connect.options.livereload%>'  //����ǰ�������Ķ˿�  35729
          },
          files:[ //�����ļ��ĸı�ͻ�ʵʱˢ����ҳ
               'Zoom/*.html',
             'Zoom/images/{,*/}*.{png,jpg}',
             'Zoom/assets/css/{,*/}*.css',
             'Zoom/assets/js/{,*/}*.js'
          ]
      }
    }
  });  
  //����grunt���ǽ�ʹ�õĲ��
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Ĭ�ϱ�ִ�е������б�  
  grunt.registerTask('default', ['concat','cssmin','uglify']);
  grunt.registerTask('server',[
      'connect:server',
      'watch'
    ]);
  
};  