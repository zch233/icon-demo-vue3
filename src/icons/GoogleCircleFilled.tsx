// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import GoogleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/GoogleCircleFilled';

export interface GoogleCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const GoogleCircleFilled: GoogleCircleFilledIconType = (props, context) => <Icon name='GoogleCircleFilled' {...{ ...props, ...context.attrs }} icon={GoogleCircleFilledSvg} />;

GoogleCircleFilled.displayName = 'GoogleCircleFilled';

export default GoogleCircleFilled;