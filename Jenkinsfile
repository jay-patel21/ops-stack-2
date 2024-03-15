pipeline {
    agent {
        label 'docker-agent' // Use a Docker agent
    }
    environment {
        DOCKER_IMAGE = 'your-docker-registry/your-image-name' // Change to your Docker registry and image name
    }
    stages {
        stage('Build and Test') {
            steps {
                script {
                    // Build Docker image
                    docker.build("${DOCKER_IMAGE}", "-f ./dockerfiles/test .")

                    // Run tests inside the Docker image
                    docker.image("${DOCKER_IMAGE}").inside {
                        sh 'npm install'
                        sh 'npm run test'
                    }
                }
            }
        }
        // stage('Push to Registry') {
        //     steps {
        //         script {
        //             // Push Docker image to registry
        //             docker.withRegistry('https://registry.example.com', 'docker-hub-credentials') {
        //                 docker.image("${DOCKER_IMAGE}").push('latest') // You can tag it as needed
        //             }
        //         }
        //     }
        // }
    }
}
