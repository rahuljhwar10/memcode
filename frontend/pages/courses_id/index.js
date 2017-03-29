import React from 'react';

import { Header } from '~/components/Header';
import { Loading } from '~/components/Loading';

import { Actions } from '~/components/Actions';
import { Problem } from '~/components/Problem';

import * as ProblemApi from '~/api/Problem';

import css from './index.css';

class Page_courses_id extends React.Component {
  static propTypes = {
    params: React.PropTypes.shape({
      id: React.PropTypes.string
    }).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      speGetProblems: {}
    };
  }

  componentDidMount = () => {
    ProblemApi.getAllByCourseId(
      spe => this.setState({ speGetProblems: spe }),
      this.props.params.id
    );
  }

  render = () =>
    <main className={css.main}>
      <Header/>

      <div className="container">
        <Actions courseId={this.props.params.id}/>

        <Loading spe={this.state.speGetProblems}>{(problems) =>
          <div className="problems">
            {
              problems.map((problem) =>
                <Problem
                  key={problem.id}
                  mode="viewing"
                  initialContentEditorState={problem.content}
                  initialExplanationEditorState={problem.explanation}
                />
              )
            }
          </div>
        }</Loading>
      </div>
    </main>
}

export { Page_courses_id };
