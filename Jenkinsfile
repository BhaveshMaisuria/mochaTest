//Jenkins file only to tutorial example
//  triggers {
//       pollSCM('*/5 * * * *') // Enabling being build on Push
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