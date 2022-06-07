// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ProjectTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProjectTwoTone';

export interface ProjectTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ProjectTwoTone: ProjectTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ProjectTwoToneSvg} />
    ;

ProjectTwoTone.displayName = 'ProjectTwoTone';

export default FunctionalComponent;