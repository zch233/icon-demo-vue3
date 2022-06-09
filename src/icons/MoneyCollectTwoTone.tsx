// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MoneyCollectTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectTwoTone';

export interface MoneyCollectTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MoneyCollectTwoTone: MoneyCollectTwoToneIconType = (props, context) => <Icon name='MoneyCollectTwoTone' {...{ ...props, ...context.attrs }} icon={MoneyCollectTwoToneSvg} />;

MoneyCollectTwoTone.displayName = 'MoneyCollectTwoTone';

export default MoneyCollectTwoTone;