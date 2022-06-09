// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ProjectTwoToneSvg from '@ant-design/icons-svg/es/asn/ProjectTwoTone';

export interface ProjectTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconProjectTwoTone: ProjectTwoToneIconType = (props, context) => (
    <Icon name='ProjectTwoTone' {...{ ...props, ...context.attrs }} icon={ProjectTwoToneSvg} />
);

IconProjectTwoTone.displayName = 'IconProjectTwoTone';

export default IconProjectTwoTone;