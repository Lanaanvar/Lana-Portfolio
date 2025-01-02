import Col from 'react-bootstrap/Col';

interface ProjectCardProps {
    title: string;
    description: string;
    imgUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({title, description, imgUrl}) => {
    return (
        <Col xs={12} md={6} lg={4}>
            <div className="project-card">
                <img src={imgUrl} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Col>
    )
}