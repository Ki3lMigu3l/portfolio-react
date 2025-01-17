import React, {useState, useEffect} from 'react'
import './Hero.css'
import banner from '../../assets/banner-stacks.png'

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);
  
    const roles = [
      'FullStack Developer',
      'Frontend Developer',
      'Backend Developer',
      'Analista de Redes and NOC',
      'DevOps'
    ];
  
    useEffect(() => {
      const handleTyping = () => {
        const currentRole = roles[index];
        if (isDeleting) {
          setText((prev) => prev.slice(0, prev.length - 1)); 
          setTypingSpeed(50);
        } else {
          setText((prev) => currentRole.slice(0, prev.length + 1));
          setTypingSpeed(150);
        }
  
        if (!isDeleting && text === currentRole) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
  
        if (isDeleting && text === '') {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      };
  
      const timer = setTimeout(handleTyping, typingSpeed);
  
      return () => clearTimeout(timer);
    }, [text, isDeleting, index, typingSpeed]);
  
    return (
      <div className='hero'>
         <h1 className='hero-principal-title'>
          I'm Ezequiel Miguel,{' '}
          <span className="dynamic-text">{text}</span>
        </h1>
        <img src={banner} alt="Ezequiel Miguel" />
        <p>
        Graduado em Análise e Desenvolvimento de Sistemas pela Uniasselvi, com 21 anos, possuo mais de 2 anos de experiência na área de TI. Atualmente, atuo como <span>Analista de Redes Nível 1 e membro do NOC na InforNetwork</span>, onde continuo aprimorando minhas habilidades e ampliando meu conhecimento.
        Minha trajetória inclui expertise em soluções avançadas de redes, como tecnologias Mikrotik, além de liderar projetos Full Stack. Nessas iniciativas, participei ativamente de todas as etapas do ciclo de vida do projeto, desde a concepção até a implementação, incluindo integração de backend, frontend e pipelines de CI/CD.
        </p>

        <h1 className='hero-projects-title'>
          Projetos
        </h1>
      </div>
      
    );
  };
  
  export default Hero;
