pipeline {
    agent {label 'docker-agent'}
    stages {
        stage('Test') {
            agent {
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
