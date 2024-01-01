import { render, screen } from '@testing-library/vue'
import ActionButton from '@/components/Shared/ActionButton.vue'

describe('ActionButton', () => {
  it('renders text', () => {
    render(ActionButton, {
      props: {
        text: 'Test Button',
        type: 'primary'
      }
    })
    const button = screen.getByRole('button', { name: /Test Button/i })
    expect(button).toBeInTheDocument()
  })

  it("applies one of several styles based on the 'type' prop", () => {
    render(ActionButton, {
      props: {
        text: 'Test Button',
        type: 'primary'
      }
    })
    const button = screen.getByRole('button', { name: /Test Button/i })
    expect(button).toHaveClass('primary')
  })
})
