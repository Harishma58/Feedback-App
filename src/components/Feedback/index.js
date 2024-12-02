// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClicking = () => {
    this.setState({
      isFeedbackSelected: true,
    })
  }

  render() {
    const {resources} = this.props
    const {id, emojis, loveEmojiUrl} = resources
    const {isFeedbackSelected} = this.state

    return (
      <div className="bg-container">
        {isFeedbackSelected ? (
          <div className="emojiCard2">
            <img src={loveEmojiUrl} alt="love emoji" className="loveEmoji" />
            <h1 className="heading">Thank You!</h1>
            <p className="name">
              We will use your feedback to improve our customer support
              performance.
            </p>
          </div>
        ) : (
          <div className="emojiCard">
            <h1 className="heading">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="emojiCont">
              {emojis.map(eachEmoji => (
                <li className="emojiItem" key={eachEmoji.id}>
                  <button
                    className="Button"
                    onClick={this.onClicking}
                    type="button"
                  >
                    <img
                      src={eachEmoji.imageUrl}
                      alt={eachEmoji.name}
                      className="emoji"
                    />
                    <br />
                    <span className="name">{eachEmoji.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
