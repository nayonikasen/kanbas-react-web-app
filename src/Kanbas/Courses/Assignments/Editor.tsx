export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name"><h3>Assignment Name</h3></label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online.
          Submit a link to the landing page of your web application running on Netlify.
          The landing page should include the following: 
          Your full name and section  links to the labs assignment and kanbas assignment. 
          Links to all source code repositories. 
          Kanbas application should have a link to navigate back to the landing page.
        </textarea>
        <br /><br />
        <table>
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                    <input id="wd-points" value={100} />
                </td>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">
                    <label id="wd-group" htmlFor="wd-wd-group">Assignment Group</label>
                </td>
                <td>
                    <select id="wd-group">
                        <option selected value="Publish All">Assignment</option>
                        <option value="Publish Selected">Non-Assignment</option>
                    </select>
                </td>
            </tr><br />
            <tr>
                <td align="right" valign="top">
                    <label id="wd-display-grade-as" htmlFor="wd-display-grade-as">Display Grade as</label>
                </td>
                <td>
                    <select id="wd-display-grade-as">
                        <option selected value="Publish All">Percentage</option>
                        <option value="Publish Selected">GPA</option>
                    </select>
                </td>
            </tr><br />
            <tr>
                <td align="right" valign="top">
                    <label id="wd-submission-type" htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td>
                    <select id="wd-submission-type">
                        <option selected value="Publish All">Online</option>
                        <option value="Publish Selected">Offline</option>
                    </select>
                    
                    <br /><br />

                    <label>Online Entry Options</label><br/>
                        <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
                        <label id ="wd-text-entry" htmlFor="wd-text-entry">Text Entry</label><br/>

                        <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
                        <label id="wd-website-url" htmlFor="wd-website-url">Website URL</label><br/>

                        <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
                        <label id="wd-media-recordings" htmlFor="wd-media-recordings">Media Recordings</label><br/>

                        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
                        <label id="wd-student-annotation" htmlFor="wd-student-annotation">Student Annotation</label><br />

                        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
                        <label is="wd-file-upload" htmlFor="wd-file-upload">File Uploads</label>
                </td>
            </tr><br />
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-assign">Assign</label>
                </td>
                <td>
                    <label htmlFor="wd-assign-to">Assign to</label><br />
                    <input id="wd-assign-to" value={"Everyone"} />

                    <br /><br />
                    <label id="wd-due-date" htmlFor="wd-assign-to"> Due </label><br />
                    <input type="date"
                        id="wd-due-date"
                        value="2024-05-13"/><br/>

                    <br />
                    <tr>
                        <td>
                            <label htmlFor="wd-available-from">Available from</label><br />
                            <input type="date"
                                id="wd-available-from"
                                value="2024-05-06"/><br/>
                        </td>
                        <td>
                            <label htmlFor="wd-available-until">Until</label><br />
                            <input type="date"
                                id="wd-available-until"
                                value="2020-05-20"/><br/>
                        </td>
                    </tr>
                </td>
            </tr>
      </table>
      <hr />
        <table align="right">
            <tr >
                <td align="right">
                    <button>Cancel</button>
                    <span style={{ margin: '0 2.5px' }}></span>
                    <button>Save</button>
                </td>
            </tr>
        </table> 
    </div>
);}