// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ProjectTwoToneSvg from 'icon-base/es/asn/ProjectTwoTone';

export interface ProjectTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconProjectTwoTone: ProjectTwoToneIconType = (props, context) => (
    <Icon name='ProjectTwoTone' {...{ ...props, ...context.attrs }} icon={ProjectTwoToneSvg} />
);

IconProjectTwoTone.displayName = 'IconProjectTwoTone';
IconProjectTwoTone.theme = 'twotone';
IconProjectTwoTone.originName = 'project';

export default IconProjectTwoTone;
