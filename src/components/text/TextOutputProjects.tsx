import { Link, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Icon } from '@iconify/react'
import { getUserRepos, GithubUserRepoData } from '../../api/github'
import { useEffect, useState } from 'react'
import arrowRightAltRounded from '@iconify/icons-material-symbols/arrow-right-alt-rounded'

const mapLanguageToIcon = (text: string | null) => {
  switch (text) {
    case 'JavaScript':
      return <FontAwesomeIcon icon={faJs} size="lg" width="20px" />
    default:
      return (
        <Icon
          icon={arrowRightAltRounded}
          inline={true}
          style={{ display: 'flex' }}
          width="20px"
        />
      )
  }
}

const ProjectSection = ({
  icon,
  title,
  mappedValues,
}: {
  icon: string
  title: string
  mappedValues: object[]
}) => (
  <>
    <Text> </Text>
    <Text>{`${icon} ${title}:`}</Text>
    {mappedValues}
  </>
)

const MapGitlabRepoData = (repo: GithubUserRepoData) => (
  <Text ml="8">
    {mapLanguageToIcon(repo.language)}{' '}
    <Link href={repo.html_url} isExternal>
      {repo.name}
    </Link>
    <ExternalLinkIcon paddingBottom="3px" />
    {` - ${repo.description || 'No Description'}`}
  </Text>
)

const TextOutputProjects = () => {
  const [repoData, setRepoData] = useState<GithubUserRepoData[]>([])

  useEffect(() => {
    getUserRepos().then(data => setRepoData(data))
  }, [])

  return (
    <>
      <Text>📚 All My Projects</Text>
      <ProjectSection
        icon="👨🏻‍💻"
        title="GitHub"
        mappedValues={repoData.map(MapGitlabRepoData)}
      />
    </>
  )
}

export default TextOutputProjects
