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
                sh 'whoami'
                sh 'ls'
                sh 'node --version'
                sh 'svn --version'
            }
        }
    }
}
