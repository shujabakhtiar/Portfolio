import React from 'react'
import Particles from 'react-particles'
import particlesconfig from './config/particles-config'

export const ParticleBackground = () => {
  return (
    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
  )
}
