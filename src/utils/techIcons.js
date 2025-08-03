import { FaReact, FaJava, FaPython, FaDocker } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaTumblr } from 'react-icons/fa';

import {
    SiSpring,
    SiSpringboot,
    SiPostgresql,
    SiTailwindcss,
    SiKubernetes,
    SiMysql,
    SiAmazonwebservices
} from 'react-icons/si';

export const techIcons = {
    React: FaReact,
    'Tailwind CSS': SiTailwindcss,
    Spring: SiSpring,
    'Spring Boot': SiSpringboot,
    PostgreSQL: SiPostgresql,
    MySQL: SiMysql,
    Docker: FaDocker,
    Kubernetes: SiKubernetes,
    AWS: SiAmazonwebservices,
    Java: FaJava,
    Python: FaPython
};

export const contactIcons = {
    email: HiOutlineMail,
    github: FaGithub,
    tistory: FaTumblr,
};