// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DiffTwoToneSvg from 'icon-base/es/asn/DiffTwoTone';

export interface DiffTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDiffTwoTone: DiffTwoToneIconType = (props, context) => <Icon name='DiffTwoTone' {...{ ...props, ...context.attrs }} icon={DiffTwoToneSvg} />;

IconDiffTwoTone.displayName = 'IconDiffTwoTone';
IconDiffTwoTone.theme = 'twotone';
IconDiffTwoTone.originName = 'diff';

export default IconDiffTwoTone;
