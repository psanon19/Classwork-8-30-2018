import React, { Component } from 'react';


class Kindle extends Component {
    render() {
        return (
            <div className="Kindle">

                <DisplayBooks arrayOfBooks={[{bookName:"First Strike", numberOfStars:"40",src:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Halo_-_First_Strike.jpg/220px-Halo_-_First_Strike.jpg"},
                ]}

            </div>
        );
    }
}

export default Kindle;
