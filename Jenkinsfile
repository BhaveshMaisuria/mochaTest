//Jenkins file only to tutorial example

// pipeline {
//   agent any
    
//   tools {nodejs "node 10"}
    
//   stages {
//     stage('Install dependencies') {
//       steps {
//         sh 'npm install'
//       }
//     }
     
//     stage('Test') {
//       steps {
//          sh 'npm test'
//       }
//     }      
//   }
// }


// cmd line

pipeline {
  agent any
    
  tools {nodejs "node 10"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/BhaveshMaisuria/mochaTest.git'
      }
    }

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