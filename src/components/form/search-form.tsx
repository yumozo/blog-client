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

    div input {
      margin-left: 0.5em;
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
