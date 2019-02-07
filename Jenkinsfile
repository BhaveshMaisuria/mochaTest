//Jenkins file only to tutorial example

// stage('Cloning Git') {
//       steps {
//         git 'https://github.com/BhaveshMaisuria/mochaTest.git'
//       }
//     }


pipeline {
  agent any
    
  tools {nodejs "node 10"}
    
  stages {
        
    

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
  }
}