// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BuildTwoToneSvg from 'icon-base/es/asn/BuildTwoTone';

export interface BuildTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBuildTwoTone: BuildTwoToneIconType = (props, context) => <Icon name='BuildTwoTone' {...{ ...props, ...context.attrs }} icon={BuildTwoToneSvg} />;

IconBuildTwoTone.displayName = 'IconBuildTwoTone';
IconBuildTwoTone.theme = 'twotone';
IconBuildTwoTone.originName = 'build';

export default IconBuildTwoTone;
