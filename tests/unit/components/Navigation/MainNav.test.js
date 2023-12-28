import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/Navigation/MainNav.vue'
import userEvent from '@testing-library/user-event'

describe('MainNav', () => {
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        }
      }
    })
  }
  it('dispalys company name', () => {
    renderMainNav()
    const companyName = screen.getByText('Careers')
    expect(companyName).toBeInTheDocument()
  })
  it('displays menu items for navigation', () => {
    renderMainNav()
    const navMenuItems = screen.getAllByRole('listitem')
    const navMenuTexts = navMenuItems.map((item) => item.textContent)
    expect(navMenuTexts).toEqual([
      'Teams',
      'Location',
      'Life at Careers',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })

  describe('when the user logs in', () => {
    it('displays the user profile image', async () => {
      renderMainNav()
      let profileImage = screen.queryByRole('img', {
        name: /profile/i
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole('button', {
        name: /sign in/i
      })
      await userEvent.click(loginButton)
      profileImage = screen.getByRole('img', {
        name: /profile/i
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
