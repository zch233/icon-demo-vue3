// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ProjectFilledSvg from '@ant-design/icons-svg/lib/asn/ProjectFilled';

export interface ProjectFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ProjectFilled: ProjectFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ProjectFilledSvg} />
    ;

ProjectFilled.displayName = 'ProjectFilled';

export default FunctionalComponent;