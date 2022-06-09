// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import AmazonCircleFilledSvg from '@ant-design/icons-svg/lib/asn/AmazonCircleFilled';

export interface AmazonCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const AmazonCircleFilled: AmazonCircleFilledIconType = (props, context) => <Icon name='AmazonCircleFilled' {...{ ...props, ...context.attrs }} icon={AmazonCircleFilledSvg} />;

AmazonCircleFilled.displayName = 'AmazonCircleFilled';

export default AmazonCircleFilled;