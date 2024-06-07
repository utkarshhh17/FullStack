pipeline {
    agent any
    environment {
        SONARQUBE_ENV = 'SonarQube'
        SONAR_HOST_URL = 'http://localhost:9000'

    }
    stages {
        stage('Checkout') {
            steps {
                // Replace with your repository URL and branch
                git url: 'https://github.com/utkarshhh17/FullStack.git', branch: 'main'
            }
        }
        stage('Verify Files') {
            steps {
                echo 'Verifying files in workspace'
                // List the contents of the workspace
                bat 'dir'
                // Verify backend directory
                bat 'if exist backend (echo Backend directory is present) else (echo Backend directory is missing && exit 1)'
                // Verify client directory
                bat 'if exist client (echo Client directory is present) else (echo Client directory is missing && exit 1)'
            }
        }
        stage('SonarQube Analysis Backend') {
            steps {
                echo 'Running SonarQube analysis for backend'
                withSonarQubeEnv('SonarQube') {
                    dir('backend') {
                        bat 'sonar-scanner -Dsonar.projectKey=backend -Dsonar.sources=. -Dsonar.host.url=${env.SONAR_HOST_URL}'
                    }
                }
            }
        }
        stage('SonarQube Analysis Client') {
            steps {
                echo 'Running SonarQube analysis for client'
                withSonarQubeEnv('SonarQube') {
                    dir('client') {
                        bat 'sonar-scanner -Dsonar.projectKey=client -Dsonar.sources=. -Dsonar.host.url=${env.SONAR_HOST_URL}'
                    }
                }
            }
        }
        stage('Build Backend') {
            steps {
                echo 'Building Backend Application'
                // Change to the backend directory
                dir('backend') {
                    // Install dependencies and build the backend
                    bat 'npm install'
                    // You might have other build steps for your backend, e.g., compile TypeScript
                    // bat 'npm run build'
                }
            }
        }
        stage('Build Client') {
            steps {
                echo 'Building Client Application'
                // Change to the client directory
                dir('client') {
                    // Install dependencies and build the client
                    bat 'npm install'
                    // You might have other build steps for your client, e.g., build React app
                    bat 'npm run build'
                }
            }
        }
    }
}
