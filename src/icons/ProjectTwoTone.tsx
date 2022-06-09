// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ProjectTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProjectTwoTone';

export interface ProjectTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ProjectTwoTone: ProjectTwoToneIconType = (props, context) => <Icon name='ProjectTwoTone' {...{ ...props, ...context.attrs }} icon={ProjectTwoToneSvg} />;

ProjectTwoTone.displayName = 'ProjectTwoTone';

export default ProjectTwoTone;