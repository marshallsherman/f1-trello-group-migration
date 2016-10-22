import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <section class="flex">
      <div>
        <h1>Twelve</h1>
      </div>

      <div class="selection">
        <select class="dropdown-menu">Choose Option
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    </section>
  );
};

export default HomePage;
