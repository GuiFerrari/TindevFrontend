import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 50px;
  text-align: center;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 50px;

    li {
      display: flex;
      flex-direction: column;

      img {
        max-width: 100%;
        border-radius: 5px 5px 0 0;
      }

      footer {
        flex: 1;
        background: #FFF;
        border: 1px solid #eee;
        padding: 15px 20px;
        text-align: left;
        border-radius: 0 0 5px 5px;

        strong {
          font-size: 16px;
          color: #333;
        }

        p {
          font-size: 14px;
          line-height: 20px;
          color: #999;
          margin-top: 5px;
        }
      }

      .buttons {
        margin-top: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;

        button {
          height: 50px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          border: 0;
          background: #FFF;
          cursor: pointer;

          :hover img {
            transform: translateY(-5px);
            transition: all .2s;
          }

          img {
            transition: all .2s;
          }
        }
      }
    }

    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 465px) {
      grid-template-columns: repeat(1, 1fr);
    }

  }

  .loading {
    img {
      width: 150px;
    }
  }

  .empty {
    margin-top: 40px;
    background: #d1e2f9;
    padding: 20px 0;
    border-radius: 4px;
    border: 1px solid #b2cbec;
  }
`;
