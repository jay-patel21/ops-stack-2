pipeline {
    agent none
    stages {
        stage('Test') {
            agent {
               label 'docker-agent'
               dockerfile true
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
