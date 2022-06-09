// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FundTwoToneSvg from '@ant-design/icons-svg/lib/asn/FundTwoTone';

export interface FundTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FundTwoTone: FundTwoToneIconType = (props, context) => <Icon name='FundTwoTone' {...{ ...props, ...context.attrs }} icon={FundTwoToneSvg} />;

FundTwoTone.displayName = 'FundTwoTone';

export default FundTwoTone;