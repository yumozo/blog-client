import styled from 'styled-components'
import SearchButton from '@components/ui/search-btn'

const Fieldset = styled.fieldset`
  border-width: 0;

  display: flex;
  justify-content: space-between;

  .search-field {
    input {
      margin-left: 0.5em;
    }
    button {
      margin-left: 0.5em;
    }
  }

  .radio {
    display: flex;
    gap: 1em;

    div {
      display: flex;
      /* grid-template-columns: 3em auto; */
      gap: 0.5em;
    }

    input[type="radio"] {
      /* Remove most all native input styles */
      appearance: none;
      /* Not removed via appearance */
      margin: 0;

      width: 1.15em;
      height: 1.15em;
      border: 0.15em solid currentColor;
      border-radius: 50%;
      transform: translateY(-0.075em);

      display: grid;
      place-content: center;
    }

    input[type="radio"]::before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--form-control-color);
      /* Windows High Contrast Mode */
      background-color: CanvasText;
    }

    input[type="radio"]:checked::before {
      transform: scale(1);
    }

    input[type="radio"]:focus {
      outline: max(2px, 0.15em) solid currentColor;
      outline-offset: max(2px, 0.15em);
    }
  }
`

export default function SearchForm({
  inputHandle,
  changeHandle,
  searchHandle,
  filter
}: any) {
  return (
    <form>
      <Fieldset>
        <div className="search-field">
          <label htmlFor="search">What you want to find? </label>
          <input
            name="search"
            id="search"
            type="search"
            onChange={inputHandle}
          />
          <SearchButton type="button" onClick={searchHandle}>
            🔎
          </SearchButton>
        </div>
        <div className="radio">
          <div>
            <label htmlFor="users">Users</label>
            <input
              name="filter"
              id="users"
              type="radio"
              value="users"
              checked={filter === 'users'}
              onChange={changeHandle}
            />
          </div>
          <div>
            <label htmlFor="posts">Posts</label>
            <input
              name="filter"
              id="posts"
              type="radio"
              value="posts"
              checked={filter === 'posts'}
              onChange={changeHandle}
            />
          </div>
        </div>
      </Fieldset>
    </form>
  )
}
