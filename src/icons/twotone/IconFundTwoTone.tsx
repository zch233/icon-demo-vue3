// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FundTwoToneSvg from 'icon-base/es/asn/FundTwoTone';

export interface FundTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFundTwoTone: FundTwoToneIconType = (props, context) => <Icon name='FundTwoTone' {...{ ...props, ...context.attrs }} icon={FundTwoToneSvg} />;

IconFundTwoTone.displayName = 'IconFundTwoTone';
IconFundTwoTone.theme = 'twotone';
IconFundTwoTone.originName = 'fund';

export default IconFundTwoTone;
