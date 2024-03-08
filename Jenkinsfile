pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'ls .ssh'   
            }
            agent {
               
                docker { image 'node:20.11.1' }
            }
            steps {
                sh 'whoami'
                sh 'docker ps'
                sh 'node --version'
                sh 'svn --version'
            }
        }
    }
}
