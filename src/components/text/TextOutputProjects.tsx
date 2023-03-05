import { Text } from '@chakra-ui/react'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { getUserRepos, GithubUserRepoData } from '../../api/github'
import { useEffect, useState } from 'react'
import arrowRightAltRounded from '@iconify/icons-material-symbols/arrow-right-alt-rounded'
import { DisplayItem, DisplaySection } from '../DisplayItems'

const mapLanguageToIcon = (text: string | null) => {
  switch (text) {
    case 'JavaScript':
      return faJs
    default:
      return arrowRightAltRounded
  }
}

const TextOutputProjects = () => {
  const [repoData, setRepoData] = useState<GithubUserRepoData[]>([])

  useEffect(() => {
    getUserRepos().then(data => setRepoData(data))
  }, [])

  return (
    <>
      <Text>📚 All My Projects</Text>
      <DisplaySection
        icon="👨🏻‍💻"
        title="GitHub"
        mappedValues={repoData
          .map(data => ({
            icon: mapLanguageToIcon(data.language),
            name: data.name,
            link: data.html_url,
            description: data.description,
          }))
          .map(DisplayItem)}
      />
    </>
  )
}

export default TextOutputProjects
