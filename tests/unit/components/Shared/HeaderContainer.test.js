import { render, screen } from '@testing-library/vue'
import HeaderContainer from '@/components/Shared/HeaderContainer.vue'

describe('HeaderContainer', () => {
  it('allows parent component to provide title content', () => {
    render(HeaderContainer, {
      slots: {
        title: '<h1>Test Title</h1>'
      }
    })
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('allows parent component to provide subtitle content', () => {
    render(HeaderContainer, {
      slots: {
        subtitle: '<h2>Test Subtitle</h2>'
      }
    })
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
  })
})
