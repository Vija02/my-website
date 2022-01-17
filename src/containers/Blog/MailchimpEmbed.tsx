import React from "react"

const MailchimpEmbed = () => {
  return (
    <div className="mailchimp">
      <div id="mc_embed_signup">
        <form
          action="https://michaelsalim.us20.list-manage.com/subscribe/post?u=b90552df08628bdbc1ff28fd0&amp;id=fd63a97c03"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <input
              type="email"
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder="Enter E-mail address"
              required
            />
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_b90552df08628bdbc1ff28fd0_fd63a97c03"
                tabIndex={-1}
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  value="Subscribe to mailing list"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MailchimpEmbed
