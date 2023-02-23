import { useLoaderData } from 'react-router-dom'
import StaticPage from '../layouts/StaticPage'
import TextOutputProjects from '../components/text/TextOutputProjects'

const Projects = () => {
  const { title } = useLoaderData() as { title: string }
  return (
    <StaticPage pageName={title}>
      <TextOutputProjects />
    </StaticPage>
  )
}

export default Projects
