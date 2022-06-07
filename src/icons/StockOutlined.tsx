// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import StockOutlinedSvg from '@ant-design/icons-svg/lib/asn/StockOutlined';

export interface StockOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const StockOutlined: StockOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={StockOutlinedSvg} />
    ;

StockOutlined.displayName = 'StockOutlined';

export default FunctionalComponent;