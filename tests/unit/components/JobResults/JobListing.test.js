import { render, screen } from '@testing-library/vue'

import JobListing from '@/components/JobResults/JobListing.vue'
import { RouterLinkStub } from '@vue/test-utils'

describe('JobListing', () => {
  const createJobProps = (jobProps = {}) => ({
    title: 'Software Engineer',
    organization: 'Careers',
    locations: ['Remote'],
    minimumQualifications: ['Code'],
    ...jobProps
  })
  const renderJobListing = (jobProps) => {
    render(JobListing, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: {
        job: {
          ...jobProps
        }
      }
    })
  }
  it("renders job's title", () => {
    const jobProps = createJobProps({ title: 'Software Engineer' })
    renderJobListing(jobProps)
    const title = screen.getByText('Software Engineer')
    expect(title).toBeInTheDocument()
  })

  it("renders job organization's name", () => {
    const jobProps = createJobProps({ organization: 'Careers' })
    renderJobListing(jobProps)
    const companyName = screen.getByText('Careers')
    expect(companyName).toBeInTheDocument()
  })

  it('renders job location', () => {
    const jobProps = createJobProps({ locations: ['Remote', 'Passau'] })
    renderJobListing(jobProps)
    expect(screen.getByText('Remote')).toBeInTheDocument()
    expect(screen.getByText('Passau')).toBeInTheDocument()
  })

  it('renders job qualifications', () => {
    const jobProps = createJobProps({
      minimumQualifications: ['Code', 'develop']
    })
    renderJobListing(jobProps)
    expect(screen.getByText('Code')).toBeInTheDocument()
    expect(screen.getByText('develop')).toBeInTheDocument()
  })
})
