// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import MoneyCollectOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoneyCollectOutlined';

export interface MoneyCollectOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const MoneyCollectOutlined: MoneyCollectOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={MoneyCollectOutlinedSvg} />;

MoneyCollectOutlined.displayName = 'MoneyCollectOutlined';

export default MoneyCollectOutlined;