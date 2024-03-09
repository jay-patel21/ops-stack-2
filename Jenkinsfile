pipeline {
    agent {
     dockerfile {
     label 'docker-agent'
          }   
        }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}
