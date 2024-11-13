import React from 'react';

const Elements = () => {
	return (
		<article id="elements">
		  <h2 className="major">Elements</h2>
		  <section>
		    <h3 className="major">Text</h3>
		    <p>
		      This is <b>bold</b> and this is <strong>strong</strong>. This is{" "}
		      <i>italic</i> and this is <em>emphasized</em>. This is{" "}
		      <sup>superscript</sup> text and this is <sub>subscript</sub> text. This is{" "}
		      <u>underlined</u> and this is code:{" "}
		      <code>
		        for (;;) {"{"} ... {"}"}
		      </code>
		      . Finally, <a href="#">this is a link</a>.
		    </p>
		    <hr />
		    <h2>Heading Level 2</h2>
		    <h3>Heading Level 3</h3>
		    <h4>Heading Level 4</h4>
		    <h5>Heading Level 5</h5>
		    <h6>Heading Level 6</h6>
		    <hr />
		    <h4>Blockquote</h4>
		    <blockquote>
		      Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
		      sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus
		      vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing
		      accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum
		      dolor sit amet nullam adipiscing eu felis.
		    </blockquote>
		    <h4>Preformatted</h4>
		    <pre>
		      <code>
		        i = 0;{"\n"}
		        {"\n"}while (!deck.isInOrder()) {"{"}
		        {"\n"}
		        {"    "}print 'Iteration ' + i;{"\n"}
		        {"    "}deck.shuffle();{"\n"}
		        {"    "}i++;{"\n"}
		        {"}"}
		        {"\n"}
		        {"\n"}print 'It took ' + i + ' iterations to sort the deck.';
		      </code>
		    </pre>
		  </section>
		  <section>
		    <h3 className="major">Lists</h3>
		    <h4>Unordered</h4>
		    <ul>
		      <li>Dolor pulvinar etiam.</li>
		      <li>Sagittis adipiscing.</li>
		      <li>Felis enim feugiat.</li>
		    </ul>
		    <h4>Alternate</h4>
		    <ul className="alt">
		      <li>Dolor pulvinar etiam.</li>
		      <li>Sagittis adipiscing.</li>
		      <li>Felis enim feugiat.</li>
		    </ul>
		    <h4>Ordered</h4>
		    <ol>
		      <li>Dolor pulvinar etiam.</li>
		      <li>Etiam vel felis viverra.</li>
		      <li>Felis enim feugiat.</li>
		      <li>Dolor pulvinar etiam.</li>
		      <li>Etiam vel felis lorem.</li>
		      <li>Felis enim et feugiat.</li>
		    </ol>
		    <h4>Icons</h4>
		    <ul className="icons">
		      <li>
		        <a href="#" className="icon brands fa-twitter">
		          <span className="label">Twitter</span>
		        </a>
		      </li>
		      <li>
		        <a href="#" className="icon brands fa-facebook-f">
		          <span className="label">Facebook</span>
		        </a>
		      </li>
		      <li>
		        <a href="#" className="icon brands fa-instagram">
		          <span className="label">Instagram</span>
		        </a>
		      </li>
		      <li>
		        <a href="#" className="icon brands fa-github">
		          <span className="label">Github</span>
		        </a>
		      </li>
		    </ul>
		    <h4>Actions</h4>
		    <ul className="actions">
		      <li>
		        <a href="#" className="button primary">
		          Default
		        </a>
		      </li>
		      <li>
		        <a href="#" className="button">
		          Default
		        </a>
		      </li>
		    </ul>
		    <ul className="actions stacked">
		      <li>
		        <a href="#" className="button primary">
		          Default
		        </a>
		      </li>
		      <li>
		        <a href="#" className="button">
		          Default
		        </a>
		      </li>
		    </ul>
		  </section>
		  <section>
		    <h3 className="major">Table</h3>
		    <h4>Default</h4>
		    <div className="table-wrapper">
		      <table>
		        <thead>
		          <tr>
		            <th>Name</th>
		            <th>Description</th>
		            <th>Price</th>
		          </tr>
		        </thead>
		        <tbody>
		          <tr>
		            <td>Item One</td>
		            <td>Ante turpis integer aliquet porttitor.</td>
		            <td>29.99</td>
		          </tr>
		          <tr>
		            <td>Item Two</td>
		            <td>Vis ac commodo adipiscing arcu aliquet.</td>
		            <td>19.99</td>
		          </tr>
		          <tr>
		            <td>Item Three</td>
		            <td> Morbi faucibus arcu accumsan lorem.</td>
		            <td>29.99</td>
		          </tr>
		          <tr>
		            <td>Item Four</td>
		            <td>Vitae integer tempus condimentum.</td>
		            <td>19.99</td>
		          </tr>
		          <tr>
		            <td>Item Five</td>
		            <td>Ante turpis integer aliquet porttitor.</td>
		            <td>29.99</td>
		          </tr>
		        </tbody>
		        <tfoot>
		          <tr>
		            <td colSpan={2} />
		            <td>100.00</td>
		          </tr>
		        </tfoot>
		      </table>
		    </div>
		    <h4>Alternate</h4>
		    <div className="table-wrapper">
		      <table className="alt">
		        <thead>
		          <tr>
		            <th>Name</th>
		            <th>Description</th>
		            <th>Price</th>
		          </tr>
		        </thead>
		        <tbody>
		          <tr>
		            <td>Item One</td>
		            <td>Ante turpis integer aliquet porttitor.</td>
		            <td>29.99</td>
		          </tr>
		          <tr>
		            <td>Item Two</td>
		            <td>Vis ac commodo adipiscing arcu aliquet.</td>
		            <td>19.99</td>
		          </tr>
		          <tr>
		            <td>Item Three</td>
		            <td> Morbi faucibus arcu accumsan lorem.</td>
		            <td>29.99</td>
		          </tr>
		          <tr>
		            <td>Item Four</td>
		            <td>Vitae integer tempus condimentum.</td>
		            <td>19.99</td>
		          </tr>
		          <tr>
		            <td>Item Five</td>
		            <td>Ante turpis integer aliquet porttitor.</td>
		            <td>29.99</td>
		          </tr>
		        </tbody>
		        <tfoot>
		          <tr>
		            <td colSpan={2} />
		            <td>100.00</td>
		          </tr>
		        </tfoot>
		      </table>
		    </div>
		  </section>
		  <section>
		    <h3 className="major">Buttons</h3>
		    <ul className="actions">
		      <li>
		        <a href="#" className="button primary">
		          Primary
		        </a>
		      </li>
		      <li>
		        <a href="#" className="button">
		          Default
		        </a>
		      </li>
		    </ul>
		    <ul className="actions">
		      <li>
		        <a href="#" className="button">
		          Default
		        </a>
		      </li>
		      <li>
		        <a href="#" className="button small">
		          Small
		        </a>
		      </li>
		    </ul>
		    <ul className="actions">
		      <li>
		        <a href="#" className="button primary icon solid fa-download">
		          Icon
		        </a>
		      </li>
		      <li>
		        <a href="#" className="button icon solid fa-download">
		          Icon
		        </a>
		      </li>
		    </ul>
		    <ul className="actions">
		      <li>
		        <span className="button primary disabled">Disabled</span>
		      </li>
		      <li>
		        <span className="button disabled">Disabled</span>
		      </li>
		    </ul>
		  </section>
		  <section>
		    <h3 className="major">Form</h3>
		    <form method="post" action="#">
		      <div className="fields">
		        <div className="field half">
		          <label htmlFor="demo-name">Name</label>
		          <input
		            type="text"
		            name="demo-name"
		            id="demo-name"
		            defaultValue=""
		            placeholder="Jane Doe"
		          />
		        </div>
		        <div className="field half">
		          <label htmlFor="demo-email">Email</label>
		          <input
		            type="email"
		            name="demo-email"
		            id="demo-email"
		            defaultValue=""
		            placeholder="jane@untitled.tld"
		          />
		        </div>
		        <div className="field">
		          <label htmlFor="demo-category">Category</label>
		          <select name="demo-category" id="demo-category">
		            <option value="">-</option>
		            <option value={1}>Manufacturing</option>
		            <option value={1}>Shipping</option>
		            <option value={1}>Administration</option>
		            <option value={1}>Human Resources</option>
		          </select>
		        </div>
		        <div className="field half">
		          <input
		            type="radio"
		            id="demo-priority-low"
		            name="demo-priority"
		            defaultChecked=""
		          />
		          <label htmlFor="demo-priority-low">Low</label>
		        </div>
		        <div className="field half">
		          <input type="radio" id="demo-priority-high" name="demo-priority" />
		          <label htmlFor="demo-priority-high">High</label>
		        </div>
		        <div className="field half">
		          <input type="checkbox" id="demo-copy" name="demo-copy" />
		          <label htmlFor="demo-copy">Email me a copy</label>
		        </div>
		        <div className="field half">
		          <input
		            type="checkbox"
		            id="demo-human"
		            name="demo-human"
		            defaultChecked=""
		          />
		          <label htmlFor="demo-human">Not a robot</label>
		        </div>
		        <div className="field">
		          <label htmlFor="demo-message">Message</label>
		          <textarea
		            name="demo-message"
		            id="demo-message"
		            placeholder="Enter your message"
		            rows={6}
		            defaultValue={""}
		          />
		        </div>
		      </div>
		      <ul className="actions">
		        <li>
		          <input
		            type="submit"
		            defaultValue="Send Message"
		            className="primary"
		          />
		        </li>
		        <li>
		          <input type="reset" defaultValue="Reset" />
		        </li>
		      </ul>
		    </form>
		  </section>
		</article>

	);
};

export default Elements;