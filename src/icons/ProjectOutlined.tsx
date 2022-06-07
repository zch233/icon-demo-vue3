// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, {IconProps} from '../components/Icon';
import ProjectOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProjectOutlined';

export interface ProjectOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ProjectOutlined: ProjectOutlinedIconType = (props, context) => 
    <Icon {{ ...props, ...context.attrs }} icon={ProjectOutlinedSvg} />
    ;

ProjectOutlined.displayName = 'ProjectOutlined';

export default ProjectOutlined;