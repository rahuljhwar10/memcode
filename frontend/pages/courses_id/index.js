import { commonFetch } from '~/api/commonFetch';

import { Header } from '~/components/Header';
import { Loading } from '~/components/Loading';
import { CourseActions } from '~/components/CourseActions';
import { Problem } from '~/components/Problem';

import css from './index.css';

class Page_courses_id extends React.Component {
  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.string
    }).isRequired
  }

  state = {
    speGetPage: {}
  }

  componentDidMount = () =>
    commonFetch(
      spe => this.setState({ speGetPage: spe }),
      'GET', `/api/pages/courses/${this.props.params.id}`
    )

  render = () =>
    <main className={css.main}>
      <Header/>

      <div className="container">
        <CourseActions courseId={this.props.params.id} ifCourseDescriptionIsDisplayed/>

        <Loading spe={this.state.speGetPage}>{(problems) =>
          <section className="problems">
            {problems.map((problem) =>
              <Problem
                mode="show"
                problemContent={problem.content}
                problemType={problem.type}
              />
            )}
          </section>
        }</Loading>
      </div>
    </main>
}

export { Page_courses_id };
