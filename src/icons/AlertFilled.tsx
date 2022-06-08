// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AlertFilledSvg from '@ant-design/icons-svg/lib/asn/AlertFilled';

export interface AlertFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AlertFilled: AlertFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={AlertFilledSvg} />;

AlertFilled.displayName = 'AlertFilled';

export default FunctionalComponent;