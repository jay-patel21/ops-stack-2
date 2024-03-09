pipeline {
    agent none
    stages {
        stage('Test') {
            agent {
               dockerfile {
                label 'docker-agent'
               }             
            }
            steps {
                sh 'node --version'
                sh 'npm run test'
            }
        }
    }
}
